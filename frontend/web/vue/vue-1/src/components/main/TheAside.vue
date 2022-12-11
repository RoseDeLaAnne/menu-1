<template>
  <aside id="aside" class="aside">
    <div class="aside__box-1">
      <Categories>
        <Category
          v-for="category in categories"
          :key="category.id"
          :category="category"
          @selectCategory="categorySelectCategory"
        />
      </Categories>
    </div>
    <div class="aside__box-2">
      <Types
        ><Type
          v-for="type in types"
          :key="type.id"
          :type="type"
          @selectType="typeSelectType"
      /></Types>
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Categories from "@/components/main/TheCategories.vue";
import Category from "@/components/main/TheCategory.vue";
import Types from "@/components/main/TheTypes.vue";
import Type from "@/components/main/TheType.vue";

export default {
  components: {
    Categories,
    Category,
    Types,
    Type,
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
      types: (state) => state.types,
    }),
  },
  methods: {
    ...mapMutations({
      categorySelectCategory: "categorySelectCategory",
      typeSelectType: "typeSelectType",
    }),
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
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
