<template>
  <header id="header" class="header">
    <div class="header__box-1">
      <div class="path">
        <h1 class="path__name">{{ data.page.name }}</h1>
      </div>
    </div>
    <div class="header__box-2">
      <button class="reserve-table">
        <h2 class="reserve-table__name">Reserve A Table</h2>
      </button>

      <div @click="$emit('showModal')" class="menu">
        <svg class="menu__icon">
          <use href="@/assets/icons/sprites.svg#menu" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import IData from "@/interfaces/components/main/headerInterface";

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<IData>,
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

.header
  padding-right: rem(56)
  padding-left: rem(56)

  height: rem(144)

  display: flex

  align-items: center
  justify-content: space-between

  @include mediaW($md)
    padding-right: rem(32)
    padding-left: rem(32)

  @include mediaW($mobile-l)
    padding-right: rem(24)
    padding-left: rem(24)

    height: rem(96)

  @include mediaW($mobile-s)
    padding-right: rem(16)
    padding-left: rem(16)

.path__name
  font-size: rem(48)
  font-weight: 600

  @include mediaW($mobile-s)
    font-size: rem(42)

.reserve-table
  @include mediaW($md)
    display: none

.reserve-table__name
  position: relative

  font-size: rem(24)

  text-transform: lowercase
  letter-spacing: .05em

  &::after
    content: ''

    position: absolute

    bottom: rem(-5)
    left: -5%

    width: 110%
    height: 1px

    background-color: #939393

.menu
  display: none

  cursor: pointer

  @include mediaW($md)
    display: block

.menu__icon
  width: rem(32)
  height: rem(32)

  @include mediaW($mobile-s)
    width: rem(24)
    height: rem(24)
</style>