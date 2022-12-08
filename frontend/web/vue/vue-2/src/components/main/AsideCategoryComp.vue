<template>
  <li class="categories__category">
    <h2 class="categories__category-name">{{ category.name }}</h2>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import ICategory from "@/interfaces/components/main/asideCategoryInterface";

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<ICategory>,
      required: true,
    },
  },
  setup() {
    //
  },
});
</script>

<style lang="sass" scoped>
@import @/assets/styles/functions

.categories__category
  padding-left: rem(56)

  position: relative

  cursor: pointer

  &:hover
    .categories__category-name
      color: #000

.categories__category-name
  font-size: rem(24)

  letter-spacing: .1em

  color: #939393

  transition: color .25s ease-in-out

  // &::before
  //   content: ''

  //   position: absolute

  //   top: 50%
  //   left: 0%

  //   transform: translate(0, -50%)

  //   width: rem(32)
  //   height: rem(2)

  //   background-color: #000
</style>
