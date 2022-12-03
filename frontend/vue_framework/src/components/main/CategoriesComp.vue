<template>
    <nav id="nav" class="nav">
        <div v-for="vQ in data" :key="vQ.id" class="nav__item">
            <h3 class="nav__item-display-name">{{ vQ.displayName }}</h3>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default defineComponent({
    data() {
        return {
            data: [
                {
                    id: 0,
                    name: "popular",
                    displayName: "popular",
                },
                {
                    id: 1,
                    name: "breakfast",
                    displayName: "breakfast",
                },
                {
                    id: 2,
                    name: "lunch",
                    displayName: "lunch",
                },
            ],
        };
    },
    computed: {
        // ...mapState({
        //     data: (state) => state.componentsMainCategories.data,
        // }),
        ...mapGetters({}),
    },
    methods: {
        ...mapMutations({}),
        ...mapActions({}),
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
//
</style>
