<template>
    <header id="header" class="header">
        <div class="header__box-1">
            <div class="path">
                <h1 class="path__display-name">{{ data.page.displayName }}</h1>
            </div>
        </div>
        <div class="header__box-2"></div>
    </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { IHeaderData } from "@/interfaces/components/main/headerInterface";

export default defineComponent({
    props: {
        data: {
            type: Object as PropType<IHeaderData>,
            required: true,
        },
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
@import @/assets/styles/functions

.header
    height: rem(128)
</style>
