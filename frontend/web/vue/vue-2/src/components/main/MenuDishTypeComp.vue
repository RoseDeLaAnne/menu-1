<template>
  <div class="menu__dish-type">
    <img
      :src="require(`@/assets/icons/main/${type.name}.svg`)"
      :alt="type.name"
      class="menu__dish-type-icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import IType from "@/interfaces/components/main/menuDishTypeInterface";

export default defineComponent({
  props: {
    type: {
      type: Object as PropType<IType>,
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
@import @/assets/styles/mixins
@import @/assets/styles/variables

.menu__dish-type
  padding: rem(8)

  background-color: #fff
  box-shadow: 0 rem(5) rem(10) rgba(#000, .1)

  border-radius: 50%

  transition: box-shadow .5s ease-in-out
  animation: scaleMenuItemIcon 1s ease-in-out infinite alternate

  cursor: pointer

  &:hover
    box-shadow: 0 5px 10px rgba(#000, .25)

.menu__dish-type-icon
  width: rem(32)
  height: rem(32)

  @include mediaW($mobile-s)
    width: rem(24)
    height: rem(24)
</style>
