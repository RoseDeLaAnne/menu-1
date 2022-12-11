<template>
  <li
    @click="$emit('selectCategory', category)"
    class="categories__category"
    :class="{
      categories__category_modal: isModal,
      categories__category_active: category.selected,
    }"
  >
    <h2 class="categories__category-name">{{ category.name }}</h2>
  </li>
</template>

<script>
export default {
  props: {
    isModal: Boolean,

    category: {
      type: Object,
      required: true,
    },
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
.categories__category
  padding-left: rem(56)

  position: relative

  cursor: pointer

  &:hover,
  &.categories__category_active
    .categories__category-name
      color: #000

  &.categories__category_active
    .categories__category-name
      font-weight: 600

      &::before
        display: block

.categories__category-name
  font-size: rem(24)

  letter-spacing: .1em

  color: #939393

  transition: color .25s ease-in-out

  &::before
    content: ''

    position: absolute

    top: 50%
    left: 0%

    transform: translate(0, -50%)

    width: rem(32)
    height: rem(2)

    display: none

    background-color: #000

  @include mediaW($md)
    @include adaptiveValue('font-size', 21, 24, 768, 320)

  @include mediaW($mobile-s)
    font-size: rem(21)

.categories__category
  &.categories__category_modal
    padding-left: 0

    .categories__category-name
      color: #DDDDDD

    &:hover,
    &.categories__category_active
      .categories__category-name
        color: #fff

    &.categories__category_active
      .categories__category-name
        font-weight: 600

        &::before
          display: none
</style>
