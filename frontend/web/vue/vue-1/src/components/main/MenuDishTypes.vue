<template>
  <section class="menu__dish-box-31">
    <slot></slot>
  </section>
</template>

<style lang="sass" scoped>
@import @/assets/styles/functions
@import @/assets/styles/mixins
@import @/assets/styles/variables

.menu__dish-box-31
  position: absolute

  bottom: rem(24)
  right: rem(16)

  display: flex

  align-items: center

  column-gap: rem(12)

  @include mediaW($mobile-s)
    column-gap: rem(8)
</style>
