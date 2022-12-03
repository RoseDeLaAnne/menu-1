<template>
    <aside id="aside" class="aside">
        <div class="aside__box-1">
            <Categories />
        </div>
        <div class="aside__box-2">
            <Type />
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Categories from "@/components/main/CategoriesComp.vue";
import Type from "@/components/main/TypeComp.vue";

export default defineComponent({
    components: {
        Categories,
        Type,
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
@import @/assets/styles/functions

.aside
    position: fixed

    top: rem(128)
    left: 0

    width: 25%
    height: 100%

    display: flex
    flex-direction: column

.aside__box-1,
.aside__box-2
    display: flex

.aside__box-1
    flex-direction: column
</style>
