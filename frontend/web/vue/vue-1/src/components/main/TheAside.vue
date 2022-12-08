<template>
  <aside id="aside" class="aside">
    <div class="aside__box-1">
      <AsideCategories>
        <AsideCategory
          v-for="category in categories"
          :key="category.id"
          :category="category"
          @selectCategory="modalCategorySelectCategory"
        />
      </AsideCategories>
    </div>
    <div class="aside__box-2">
      <AsideTypes
        ><AsideType
          v-for="dishType in types"
          :key="dishType.id"
          :type="dishType"
          @selectType="modalTypeSelectType"
      /></AsideTypes>
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import AsideCategories from "@/components/main/AsideCategories.vue";
import AsideCategory from "@/components/main/AsideCategory.vue";
import AsideTypes from "@/components/main/AsideTypes.vue";
import AsideType from "@/components/main/AsideType.vue";

export default {
  components: {
    AsideCategories,
    AsideCategory,
    AsideTypes,
    AsideType,
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
      types: (state) => state.types,
    }),
  },
  methods: {
    ...mapMutations({
      modalCategorySelectCategory: "modalCategorySelectCategory",
      modalTypeSelectType: "modalTypeSelectType",
    }),
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

  @include mediaW($xxl)
    width: rem(350)
</style>
