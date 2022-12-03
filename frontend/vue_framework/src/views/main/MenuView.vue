<template>
    <div class="page">
        <!-- <Aside /> -->
        <!-- <Header :data="headerData" /> -->

        <div class="wrap">
            <main id="main" class="main">
                <MenuItem />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// import { IHeaderData } from "@/interfaces/components/main/headerInterface";
// import { IMenuData } from "@/interfaces/views/main/menuInterface";

// import Aside from "@/components/main/AsideComp.vue";
// import Header from "@/components/main/HeaderComp.vue";

import MenuItem from '@/components/main/MenuItemComp.vue'

export default defineComponent({
    components: {
        MenuItem,
    },
    computed: {
        // ...mapState({
        //     headerData: (state): IHeaderData => state.viewsMainMenu.headerData,
        //     data: (state): IMenuData => state.viewsMainMenu.data,
        // }),
        // ...mapGetters({}),
    },
    methods: {
        // ...mapMutations({}),
        // ...mapActions({}),
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
.main
    padding: 2rem
</style>
