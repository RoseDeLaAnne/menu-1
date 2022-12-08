<template>
  <li @click="selectType(type)" class="types__type" :class="{'types__type_active' : type.selected}">
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

<script>
export default {
  props: {
    type: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectType(type) {
      this.$emit('selectType', type)
    }
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
@import @/assets/styles/functions
@import @/assets/styles/mixins
@import @/assets/styles/variables

.types__type
  display: flex

  align-items: center

  column-gap: rem(12)

  opacity: .5

  transition: opacity .25s ease-in-out

  cursor: pointer

  @include mediaW($mobile-s)
    column-gap: rem(8)

  &.types__type_active
    opacity: 1

.types__type-box-1
  padding: rem(8)

  background-color: #fff
  box-shadow: 0 rem(5) rem(20) rgba(#000, .1)

  border-radius: 50%

.types__type-icon
  width: rem(28)
  height: rem(28)

  @include mediaW($mobile-s)
    width: rem(20)
    height: rem(20)

.types__type-name
  font-size: rem(14)
  font-weight: 500

  letter-spacing: .1em

  color: #fff

  @include mediaW($mobile-s)
    font-size: rem(12)
</style>
