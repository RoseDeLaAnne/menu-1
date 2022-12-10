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

      <div v-if="$store.state.isSuperUser">Add dish</div>
    </div>

    <Transition>
      <Modal v-if="modalIsActive" @closeModal="modalCloseModal">
        <ModalCategories>
          <ModalCategory
            v-for="category in categories"
            :key="category.id"
            :category="category"
            @selectCategory="modalCategorySelectCategory"
          />
        </ModalCategories>
        <ModalTypes>
          <ModalType
            v-for="dishType in types"
            :key="dishType.id"
            :type="dishType"
            @selectType="modalTypeSelectType"
          />
        </ModalTypes>
      </Modal>
    </Transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import Aside from "@/components/main/TheAside.vue";
import Header from "@/components/main/TheHeader.vue";

import Menu from "@/components/main/TheMenu.vue";
import MenuDish from "@/components/main/MenuDish.vue";

import Modal from "@/components/UI/main/TheModal.vue";
import ModalCategories from "@/components/main/ModalCategories.vue";
import ModalCategory from "@/components/main/ModalCategory.vue";
import ModalTypes from "@/components/main/ModalTypes.vue";
import ModalType from "@/components/main/ModalType.vue";

export default {
  components: {
    Aside,
    Header,
    Menu,
    MenuDish,
    Modal,
    ModalCategories,
    ModalCategory,
    ModalTypes,
    ModalType,
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
      categoriesIsEmpty: "categoriesIsEmpty",
      typesIsEmpty: "typesIsEmpty",
    }),
  },
  methods: {
    ...mapMutations({
      headerShowModal: "menuView/headerShowModal",
      modalCloseModal: "menuView/modalCloseModal",
      modalCategorySelectCategory: "modalCategorySelectCategory",
      modalTypeSelectType: "modalTypeSelectType",
    }),
    ...mapActions({
      getDishes: "menuView/getDishes",
    }),
  },
  mounted() {
    this.getDishes();
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

.page__box-1
  @include mediaW($md)
    display: none

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
