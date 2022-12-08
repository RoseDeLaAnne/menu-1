<template>
  <section class="menu">
    <slot></slot>
  </section>
</template>

<style lang="sass" scoped>
@import @/assets/styles/functions
@import @/assets/styles/mixins
@import @/assets/styles/variables

.menu
  padding-right: rem(56)

  display: flex
  flex-wrap: wrap

  align-items: flex-start

  gap: rem(64)

  @include mediaW($md)
    padding-right: rem(32)
    padding-left: rem(32)

    gap: rem(32)

  @include mediaW($mobile-l)
    padding-right: rem(24)
    padding-left: rem(24)

    gap: rem(24)

  @include mediaW($mobile-l)
    padding-right: rem(24)
    padding-left: rem(24)

    gap: rem(24)

  @include mediaW($mobile-s)
    padding-right: rem(16)
    padding-left: rem(16)

    gap: rem(16)

  @include mediaW($mobile-xs)
    padding-right: rem(8)
    padding-left: rem(8)

    gap: rem(8)
</style>
