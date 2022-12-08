<template>
  <div class="page">
    <div class="page__box-1">
      <AsideComp />
    </div>
    <HeaderComp :data="headerData" @showModal="headerCompShowModal" />

    <div class="wrap">
      <main id="main" class="main">
        <MenuComp>
          <MenuDishComp
            v-for="dish in dishesComputed"
            :key="dish.id"
            :dish="dish"
          />
        </MenuComp>
      </main>
    </div>

    <Transition>
      <ModalComp v-if="modalIsActive" @closeModal="modalCompCloseModal">
        <ModalCategoriesComp>
          <ModalCategoryComp
            v-for="category in categories"
            :key="category.id"
            :category="category"
            @selectCategory="modalCategoryCompSelectCategory"
          />
        </ModalCategoriesComp>

        <ModalTypesComp>
          <ModalTypeComp
            v-for="dishType in types"
            :key="dishType.id"
            :type="dishType"
            @selectType="modalTypeCompSelectType"
          />
        </ModalTypesComp>
      </ModalComp>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AsideComp from "@/components/main/AsideComp.vue";
import HeaderComp from "@/components/main/HeaderComp.vue";

import MenuComp from "@/components/main/MenuComp.vue";
import MenuDishComp from "@/components/main/MenuDishComp.vue";

import ModalComp from "@/components/UI/main/ModalComp.vue";
import ModalCategoriesComp from "@/components/main/ModalCategoriesComp.vue";
import ModalCategoryComp from "@/components/main/ModalCategoryComp.vue";
import ModalTypesComp from "@/components/main/ModalTypesComp.vue";
import ModalTypeComp from "@/components/main/ModalTypeComp.vue";

import IDish from "@/interfaces/components/main/menuDishInterface";

import ICategory from "@/interfaces/components/main/asideCategoryInterface";
import IType from "@/interfaces/components/main/asideTypeInterface";

export default defineComponent({
  components: {
    AsideComp,
    HeaderComp,
    MenuComp,
    MenuDishComp,
    ModalComp,
    ModalCategoriesComp,
    ModalCategoryComp,
    ModalTypesComp,
    ModalTypeComp,
  },
  data() {
    return {
      headerData: {
        page: {
          name: "Menu",
        },
      },

      categories: [
        {
          id: 0,
          name: "breakfast",
          selected: false,
        },
        {
          id: 1,
          name: "lunch",
          selected: false,
        },
        {
          id: 2,
          name: "soup",
          selected: false,
        },
        {
          id: 3,
          name: "salads",
          selected: false,
        },
        {
          id: 4,
          name: "meat",
          selected: false,
        },
        {
          id: 5,
          name: "pasta",
          selected: false,
        },
        {
          id: 6,
          name: "beverages",
          selected: false,
        },
      ],
      types: [
        {
          id: 0,
          name: "vegan",
          selected: false,
        },
        {
          id: 1,
          name: "hot",
          selected: false,
        },
      ],

      dishes: [
        {
          id: 0,
          category: "salads",
          weight: 342,
          name: "Halumini",
          price: 3.6,
          types: [
            {
              id: 0,
              name: "vegan",
            },
          ],
          color: "#000",
          backgroundColor: "#e1eabd",
          imageUrl: "",
        },
        {
          id: 1,
          category: "meat",
          weight: 482,
          name: "Beef",
          price: 7.4,
          types: [],
          color: "#fff",
          backgroundColor: "#896857",
          imageUrl: "",
        },
        {
          id: 2,
          category: "pasta",
          weight: 372,
          name: "Alfredo",
          price: 4.1,
          types: [],
          color: "#000",
          backgroundColor: "#f4e3af",
          imageUrl: "",
        },
        {
          id: 3,
          category: "breakfast",
          weight: 143,
          name: "Pancakes",
          price: 2.5,
          types: [
            {
              id: 0,
              name: "vegan",
            },
          ],
          color: "#fff",
          backgroundColor: "#442e19",
          imageUrl: "",
        },
        {
          id: 4,
          category: "lunch",
          weight: 543,
          name: "Red fish",
          price: 7.5,
          types: [
            {
              id: 0,
              name: "hot",
            },
          ],
          color: "#000",
          backgroundColor: "#de8871",
          imageUrl: "",
        },
        {
          id: 5,
          category: "soup",
          weight: 653,
          name: "Egg soup",
          price: 10.8,
          types: [
            {
              id: 0,
              name: "hot",
            },
          ],
          color: "#fff",
          backgroundColor: "#231e15",
          imageUrl: "",
        },
        {
          id: 6,
          category: "beverages",
          weight: 253,
          name: "Red apple",
          price: 3.8,
          types: [
            {
              id: 0,
              name: "vegan",
            },
          ],
          color: "#fff",
          backgroundColor: "#792314",
          imageUrl: "",
        },
      ],

      modalIsActive: false,
    };
  },
  computed: {
    categoriesIsEmpty() {
      var selectedCategories = this.categories.filter(
        (category) => category.selected
      );

      if (selectedCategories.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    typesIsEmpty() {
      var selectedTypes = this.types.filter((type) => type.selected);

      if (selectedTypes.length === 0) {
        return true;
      } else {
        return false;
      }
    },

    dishesComputed(): IDish[] {
      var dishes = [];
      var newDishes = [];
      var newDishes2 = [];
      var newDishes3 = [];

      if (!this.categoriesIsEmpty && !this.typesIsEmpty) {
        for (const category of this.categories) {
          if (category.selected) {
            dishes.push(
              this.dishes.filter((dish) => dish.category === category.name)
            );
          }
        }

        for (const dish of dishes) {
          for (const dishNested of dish) {
            newDishes.push(dishNested);
          }
        }

        for (const type of this.types) {
          if (type.selected) {
            newDishes2.push(
              newDishes.filter((dish) =>
                dish.types.some((dishType) => dishType.name === type.name)
              )
            );
          }
        }
        for (const dish of newDishes2) {
          for (const dishNested of dish) {
            newDishes3.push(dishNested);
          }
        }

        return newDishes3;
      } else if (!this.categoriesIsEmpty && this.typesIsEmpty) {
        for (const category of this.categories) {
          if (category.selected) {
            dishes.push(
              this.dishes.filter((dish) => dish.category === category.name)
            );
          }
        }

        for (const dish of dishes) {
          for (const dishNested of dish) {
            newDishes.push(dishNested);
          }
        }

        return newDishes;
      } else if (this.categoriesIsEmpty && this.typesIsEmpty) {
        return this.dishes;
      } else if (this.categoriesIsEmpty && !this.typesIsEmpty) {
        for (const type of this.types) {
          if (type.selected) {
            newDishes2.push(
              this.dishes.filter((dish) =>
                dish.types.some((dishType) => dishType.name === type.name)
              )
            );
          }
        }
        for (const dish of newDishes2) {
          for (const dishNested of dish) {
            newDishes3.push(dishNested);
          }
        }

        return newDishes3;
      } else {
        return this.dishes;
      }
    },
  },
  methods: {
    headerCompShowModal() {
      this.modalIsActive = true;

      document.body.classList.add("body_no-scroll");
    },
    modalCompCloseModal() {
      this.modalIsActive = false;

      document.body.classList.remove("body_no-scroll");
    },

    modalCategoryCompSelectCategory(category: ICategory) {
      this.categories[category.id].selected = !category.selected;
    },
    modalTypeCompSelectType(type: IType) {
      this.types[type.id].selected = !type.selected;
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

.page__box-1
  @include mediaW($md)
    display: none

.wrap
  padding-left: 25%

  @include mediaW($md)
    padding-left: 0

.main
  padding-bottom: rem(64)

  @include mediaW($xxl)
    padding-bottom: rem(56)

  @include mediaW($xl)
    padding-bottom: rem(48)

  @include mediaW($lg)
    padding-bottom: rem(32)

  @include mediaW($mobile-l)
    padding-bottom: rem(24)

  @include mediaW($mobile-s)
    padding-bottom: rem(16)

  @include mediaW($mobile-xs)
    padding-bottom: rem(8)
</style>
