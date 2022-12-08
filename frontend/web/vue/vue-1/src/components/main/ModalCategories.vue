<template>
  <nav class="categories">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<style lang="sass" scoped>
@import @/assets/styles/functions

.categories
  position: absolute

  top: 50%
  left: 50%

  transform: translate(-50%, -50%)

  ul
    display: flex
    flex-direction: column

    align-items: center

    row-gap: rem(16)
</style>
