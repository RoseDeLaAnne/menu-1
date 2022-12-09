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
  // padding-right: rem(56)
  padding-right: calc(rem(32) + (56 - 32) * ((100vw - 768px) / (1920 - 768)))

  display: flex
  flex-wrap: wrap

  align-items: flex-start

  // gap: rem(64)
  gap: calc(rem(32) + (64 - 32) * ((100vw - 768px) / (1920 - 768)))

  @include mediaW($md)
    // padding-right: rem(32)
    // padding-left: rem(32)
    padding-right: calc(rem(24) + (32 - 24) * ((100vw - 425px) / (768 - 425)))
    padding-left: calc(rem(24) + (32 - 24) * ((100vw - 425px) / (768 - 425)))

    // gap: rem(32)
    gap: calc(rem(24) + (32 - 24) * ((100vw - 425px) / (768 - 425)))

  @include mediaW($mobile-l)
    // padding-right: rem(24)
    // padding-left: rem(24)
    padding-right: calc(rem(16) + (24 - 16) * ((100vw - 320px) / (425 - 320)))
    padding-left: calc(rem(16) + (24 - 16) * ((100vw - 320px) / (425 - 320)))

    // gap: rem(24)
    gap: calc(rem(16) + (24 - 16) * ((100vw - 320px) / (425 - 320)))

  @include mediaW($mobile-s)
    // padding-right: rem(16)
    // padding-left: rem(16)
    padding-right: calc(rem(8) + (16 - 8) * ((100vw - 280px) / (320 - 280)))
    padding-left: calc(rem(8) + (16 - 8) * ((100vw - 280px) / (320 - 280)))

    // gap: rem(16)
    gap: calc(rem(8) + (16 - 8) * ((100vw - 320px) / (320 - 280)))

  @include mediaW($mobile-xs)
    padding-right: rem(8)
    padding-left: rem(8)

    gap: rem(8)
</style>
