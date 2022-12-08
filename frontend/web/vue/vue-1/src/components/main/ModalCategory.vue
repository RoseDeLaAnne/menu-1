<template>
  <li @click="selectCategory(category)" class="categories__category" :class="{'categories__category_active' : category.selected}">
    <h2 class="categories__category-name">{{ category.name }}</h2>
  </li>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectCategory(category) {
      this.$emit('selectCategory', category)
    }
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
@import @/assets/styles/functions

.categories__category
  position: relative

  cursor: pointer

  &.categories__category_active
    .categories__category-name
      font-weight: 600

      color: #fff

  &:hover
    .categories__category-name
      color: #fff

.categories__category-name
  font-size: rem(24)

  letter-spacing: .1em

  color: #DDDDDD

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
