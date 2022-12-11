<template>
  <section class="menu__dish-box-31">
    <slot></slot>
  </section>
</template>

<style lang="sass" scoped>
.menu__dish-box-31
  position: absolute

  bottom: rem(24)
  left: rem(16)

  display: flex

  align-items: center

  @include adaptiveValue('column-gap', 8, 12, 1920, 320)

  @include mediaW($mobile-s)
    column-gap: rem(8)
</style>
