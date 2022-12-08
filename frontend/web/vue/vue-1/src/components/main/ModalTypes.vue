<template>
  <nav class="types">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<style lang="sass" scoped>
@import @/assets/styles/functions
@import @/assets/styles/mixins
@import @/assets/styles/variables

.types
  position: absolute

  bottom: rem(32)
  left: rem(32)

  @include mediaW($mobile-l)
    bottom: rem(24)
    left: rem(24)

  @include mediaW($mobile-s)
    bottom: rem(24)
    left: rem(16)

  ul
    display: flex

    align-items: center

    column-gap: rem(24)

    @include mediaW($mobile-s)
      column-gap: rem(16)
</style>
