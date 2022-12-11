<template>
  <div class="menu__dish" :style="menuDishBackgroundColor">
    <div class="menu__dish-box-1">
      <p class="menu__dish-category" :style="menuDishColor">
        {{ dish.category.name }}
      </p>
      <p class="menu__dish-weight" :style="menuDishColor">
        {{ dish.weight }} g
      </p>
    </div>
    <div class="menu__dish-box-2">
      <h1 class="menu__dish-name" :style="menuDishColor">{{ dish.name }}</h1>
      <h1 class="menu__dish-price" :style="menuDishColor">
        ${{ dish.price.toFixed(2) }}
      </h1>
    </div>
    <div class="menu__dish-box-3">
      <video
        :src="require(`@/assets/videos/main/${dish.category.name}.mp4`)"
        class="menu__dish-video"
        muted
        loop
        autoplay
      ></video>

      <MenuDishTypes>
        <MenuDishType
          v-for="type in dish.types"
          :key="type.id"
          :type="type"
        />
      </MenuDishTypes>
    </div>
  </div>
</template>

<script>
import MenuDishTypes from "@/components/main/MenuDishTypes.vue";
import MenuDishType from "@/components/main/MenuDishType.vue";

export default {
  components: {
    MenuDishTypes,
    MenuDishType,
  },
  props: {
    dish: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      menuDishColor: {
        "--color": this.dish.color,
      },
      menuDishBackgroundColor: {
        "--backgroundColor": this.dish.background_color,
      },
    };
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
.menu__dish,
.menu__dish-box-1,
.menu__dish-box-2,
.menu__dish-box-3
  display: flex

.menu__dish
  @include adaptiveValue('padding-top', 32, 48, 1920, 425)

  flex: 1 1 rem(352)
  flex-direction: column

  background-color: var(--backgroundColor)

  border-radius: rem(16)

  animation: scaleFromZeroToOne .5s ease-in-out, opacityFromZeroToOne .25s ease-in-out

  @include mediaW($mobile-l)
    @include adaptiveValue('padding-top', 24, 32, 425, 320)

  @include mediaW($mobile-s)
    padding-top: rem(24)

  &:nth-of-type(odd)
    .menu__dish-image,
    .menu__dish-video
      height: rem(384)

  &:nth-of-type(even)
    .menu__dish-image,
    .menu__dish-video
      height: rem(320)

.menu__dish-box-1,
.menu__dish-box-2
  @include adaptiveValue('padding-right', 16, 24, 1920, 320)
  @include adaptiveValue('padding-left', 16, 24, 1920, 320)

  justify-content: space-between

  @include mediaW($mobile-s)
    padding-right: rem(16)
    padding-left: rem(16)

.menu__dish-box-1
  margin-bottom: rem(8)

.menu__dish-box-2
  margin-bottom: rem(24)

.menu__dish-box-3
  position: relative

  border-radius: 0 0 rem(16) rem(16)

  overflow: hidden

.menu__dish-category,
.menu__dish-weight,
.menu__dish-name,
.menu__dish-price
  letter-spacing: .05em

  color: var(--color)

.menu__dish-category,
.menu__dish-weight
  @include adaptiveValue('font-size', 14, 16, 1920, 320)
  font-weight: 300

  @include mediaW($mobile-s)
    font-size: rem(14)

.menu__dish-name,
.menu__dish-price
  @include adaptiveValue('font-size', 21, 24, 1920, 320)
  font-weight: 700

  @include mediaW($mobile-s)
    font-size: rem(21)

.menu__dish-image,
.menu__dish-video
  border-radius: 0 0 rem(16) rem(16)

  transition: transform 1s ease-in-out

  cursor: pointer

  &:hover
    transform: scale(1.15)
</style>
