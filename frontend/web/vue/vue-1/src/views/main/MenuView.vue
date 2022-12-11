<template>
  <div class="page">
    <div class="page__box-1">
      <Aside />
    </div>
    <Header :data="headerData" @showModal="headerShowModal" />

    <div class="wrap">
      <main id="main" class="main">
        <Menu>
          <MenuDish v-for="dish in dishesGetter" :key="dish.id" :dish="dish" />
        </Menu>
      </main>
    </div>

    <Transition>
      <Modal v-if="modalIsActive" @closeModal="modalCloseModal">
        <Categories :isModal="true">
          <Category
            v-for="category in categories"
            :key="category.id"
            :category="category"
            :isModal="true"
            @selectCategory="categorySelectCategory"
          />
        </Categories>
        <Types :isModal="true">
          <Type
            v-for="type in types"
            :key="type.id"
            :type="type"
            :isModal="true"
            @selectType="typeSelectType"
          />
        </Types>
      </Modal>
    </Transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

import Aside from "@/components/main/TheAside.vue";
import Header from "@/components/main/TheHeader.vue";

import Menu from "@/components/main/TheMenu.vue";
import MenuDish from "@/components/main/MenuDish.vue";

import Modal from "@/components/UI/main/TheModal.vue";
import Categories from "@/components/main/TheCategories.vue";
import Category from "@/components/main/TheCategory.vue";
import Types from "@/components/main/TheTypes.vue";
import Type from "@/components/main/TheType.vue";

export default {
  components: {
    Aside,
    Header,
    Menu,
    MenuDish,
    Modal,
    Categories,
    Category,
    Types,
    Type,
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
      types: (state) => state.types,

      headerData: (state) => state.menuView.headerData,
      modalIsActive: (state) => state.menuView.modalIsActive,
    }),
    ...mapGetters({
      dishesGetter: "menuView/dishesGetter",
    }),
  },
  methods: {
    ...mapMutations({
      headerShowModal: "menuView/headerShowModal",
      modalCloseModal: "menuView/modalCloseModal",
      setCategories: "setCategories",
      setTypes: "setTypes",
      categorySelectCategory: "categorySelectCategory",
      typeSelectType: "typeSelectType",
    }),
  },
  mounted() {
    try {
      if (localStorage.categories) {
        this.$store.commit(
          "setCategories",
          JSON.parse(localStorage.categories)
        );
      }
    } catch (error) {
      console.log(error);
    }

    try {
      if (localStorage.types) {
        this.$store.commit("setTypes", JSON.parse(localStorage.types));
      }
    } catch (error) {
      console.log(error);
    }
  },
  setup() {
    //
  },
};
</script>

<style lang="sass" scoped>
.page__box-1
  @include mediaW($md)
    display: none

.main
  @include adaptiveValue('padding-bottom', 56, 64, 1920, 1400)

  @include mediaW($xxl)
    @include adaptiveValue('padding-bottom', 48, 56, 1400, 1200)

  @include mediaW($xl)
    @include adaptiveValue('padding-bottom', 32, 48, 1200, 992)

  @include mediaW($lg)
    @include adaptiveValue('padding-bottom', 24, 32, 992, 425)

  @include mediaW($mobile-l)
    @include adaptiveValue('padding-bottom', 16, 24, 425, 320)

  @include mediaW($mobile-s)
    @include adaptiveValue('padding-bottom', 8, 16, 320, 280)

  @include mediaW($mobile-xs)
    padding-bottom: rem(8)
</style>
