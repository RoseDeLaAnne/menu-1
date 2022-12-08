<template>
  <div class="menu__dish" :style="menuDishBackgroundColor">
    <div class="menu__dish-box-1">
      <p class="menu__dish-category" :style="menuDishColor">
        {{ dish.category }}
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
        :src="require(`@/assets/videos/main/${dish.category}.mp4`)"
        class="menu__dish-video"
        muted
        loop
        autoplay
      ></video>

      <MenuDishTypesComp>
        <MenuDishTypeComp
          v-for="dishTtype in dish.types"
          :key="dishTtype.id"
          :type="dishTtype"
        />
      </MenuDishTypesComp>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import MenuDishTypesComp from "@/components/main/MenuDishTypesComp.vue";
import MenuDishTypeComp from "@/components/main/MenuDishTypeComp.vue";

import IDish from "@/interfaces/components/main/menuDishInterface";

export default defineComponent({
  props: {
    dish: {
      type: Object as PropType<IDish>,
      required: true,
    },
  },
  data() {
    return {
      menuDishColor: {
        "--color": this.dish.color,
      },
      menuDishBackgroundColor: {
        "--backgroundColor": this.dish.backgroundColor,
      },
    };
  },
  components: {
    MenuDishTypesComp,
    MenuDishTypeComp,
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

.menu__dish,
.menu__dish-box-1,
.menu__dish-box-2,
.menu__dish-box-3
  display: flex

.menu__dish
  padding-top: rem(48)

  flex: 1 1 rem(352)
  flex-direction: column

  background-color: var(--backgroundColor)

  border-radius: rem(16)

  animation: scaleFromZeroToOne .5s ease-in-out, opacityFromZeroToOne .25s ease-in-out

  @include mediaW($mobile-l)
    padding-top: rem(32)

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
  padding-right: rem(24)
  padding-left: rem(24)

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
  font-size: rem(16)
  font-weight: 300

  @include mediaW($mobile-s)
    font-size: rem(14)

.menu__dish-name,
.menu__dish-price
  font-size: rem(24)
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

/* .menu__dish-video
  display: none */
</style>
