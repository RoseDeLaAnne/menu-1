<template>
  <nav class="types">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<style lang="sass" scoped>
@import @/assets/styles/functions

.types
  padding-left: rem(48)

  ul
    display: flex

    align-items: center

    column-gap: rem(32)
</style>
