<template>
  <section class="menu">
    <slot></slot>
  </section>
</template>

<style lang="sass" scoped>
.menu
  @include adaptiveValue('padding-right', 32, 56, 1920, 768)

  display: flex
  flex-wrap: wrap

  align-items: flex-start

  @include adaptiveValue('gap', 32, 64, 1920, 768)

  @include mediaW($md)
    @include adaptiveValue('padding-right', 24, 32, 768, 425)
    @include adaptiveValue('padding-left', 24, 32, 768, 425)

    @include adaptiveValue('gap', 24, 32, 768, 425)

  @include mediaW($mobile-l)
    @include adaptiveValue('padding-right', 16, 24, 425, 320)
    @include adaptiveValue('padding-left', 16, 24, 425, 320)

    @include adaptiveValue('gap', 16, 24, 425, 320)

  @include mediaW($mobile-s)
    @include adaptiveValue('padding-right', 8, 16, 329, 280)
    @include adaptiveValue('padding-left', 8, 16, 329, 280)

    @include adaptiveValue('gap', 8, 16, 329, 280)

  @include mediaW($mobile-xs)
    padding-right: rem(8)
    padding-left: rem(8)

    gap: rem(8)
</style>
