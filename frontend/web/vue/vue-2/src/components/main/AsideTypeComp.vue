<template>
  <li class="types__type">
    <div class="types__type-box-1">
      <img
        :src="require(`@/assets/icons/main/${type.name}.svg`)"
        :alt="type.name"
        class="types__type-icon"
      />
    </div>
    <h3 class="types__type-name">{{ type.name }}</h3>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import IType from "@/interfaces/components/main/asideTypeInterface";

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

.types__type
  display: flex

  align-items: center

  column-gap: rem(12)

  cursor: pointer

.types__type-box-1
  padding: rem(8)

  background-color: #fff
  box-shadow: 0 rem(5) rem(20) rgba(#000, .1)

  border-radius: 50%

.types__type-icon
  width: rem(28)
  height: rem(28)

.types__type-name
  font-size: rem(14)
  font-weight: 500

  letter-spacing: .1em
</style>
