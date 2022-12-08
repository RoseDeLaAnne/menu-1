<template>
  <aside id="aside" class="aside">
    <div class="aside__box-1">
      <AsideCategoriesComp>
        <AsideCategoryComp
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </AsideCategoriesComp>
    </div>
    <div class="aside__box-2">
      <AsideTypesComp
        ><AsideTypeComp v-for="type in types" :key="type.id" :type="type"
      /></AsideTypesComp>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AsideCategoriesComp from "@/components/main/AsideCategoriesComp.vue";
import AsideCategoryComp from "@/components/main/AsideCategoryComp.vue";
import AsideTypesComp from "@/components/main/AsideTypesComp.vue";
import AsideTypeComp from "@/components/main/AsideTypeComp.vue";

export default defineComponent({
  components: {
    AsideCategoriesComp,
    AsideCategoryComp,
    AsideTypesComp,
    AsideTypeComp,
  },
  data() {
    return {
      categories: [
        {
          id: 0,
          name: "breakfast",
        },
        {
          id: 1,
          name: "lunch",
        },
        {
          id: 2,
          name: "soup",
        },
        {
          id: 3,
          name: "salads",
        },
        {
          id: 4,
          name: "meat",
        },
        {
          id: 5,
          name: "pasta",
        },
        {
          id: 6,
          name: "beverages",
        },
      ],
      types: [
        {
          id: 0,
          name: 'vegan'
        },
        {
          id: 1,
          name: 'hot'
        },
      ],
    };
  },
  setup() {
    //
  },
});
</script>

<style lang="sass" scoped>
@import @/assets/styles/functions

.aside
  padding-bottom: rem(48)

  position: fixed

  top: rem(144)
  left: 0

  width: 25%
  height: calc(100% - rem(144))

  display: flex
  flex-direction: column

  justify-content: space-between
</style>
