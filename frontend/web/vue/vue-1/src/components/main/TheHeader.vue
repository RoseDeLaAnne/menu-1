<template>
  <header id="header" class="header">
    <div class="header__box-1">
      <div class="path">
        <h1 class="path__name">{{ data.view.name }}</h1>
      </div>
    </div>
    <div class="header__box-2">
      <div @click="$emit('showModal')" class="menu">
        <svg class="menu__icon">
          <use href="@/assets/icons/sprites.svg#menu" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
.header
  @include adaptiveValue('padding-right', 32, 56, 1920, 768)
  @include adaptiveValue('padding-left', 32, 56, 1920, 768)

  @include adaptiveValue('height', 96, 144, 1920, 425)

  display: flex

  align-items: center
  justify-content: space-between

  @include mediaW($md)
    @include adaptiveValue('padding-right', 24, 32, 768, 425)
    @include adaptiveValue('padding-left', 24, 32, 768, 425)

  @include mediaW($mobile-l)
    @include adaptiveValue('padding-right', 16, 24, 425, 320)
    @include adaptiveValue('padding-left', 16, 24, 425, 320)

    height: rem(96)

  @include mediaW($mobile-s)
    padding-right: rem(16)
    padding-left: rem(16)

.path__name
  @include adaptiveValue('font-size', 42, 48, 1920, 320)

  font-weight: 600

  @include mediaW($mobile-s)
    font-size: rem(42)

.menu
  display: none

  cursor: pointer

  @include mediaW($md)
    display: block

.menu__icon
  @include adaptiveValue('width', 24, 32, 768, 320)
  @include adaptiveValue('height', 24, 32, 768, 320)

  @include mediaW($mobile-s)
    width: rem(24)
    height: rem(24)
</style>
