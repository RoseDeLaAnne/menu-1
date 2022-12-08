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
  ul
    display: flex
    flex-direction: column

    row-gap: rem(12)
</style>
