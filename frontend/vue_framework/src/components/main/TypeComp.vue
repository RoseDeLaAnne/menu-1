<template>
    <div class="types">
        <div v-for="vQ in data" :key="vQ.id" class="types__item">
            <div class="types__item-box-1">
                <svg class="types__item-icon">
                    <use :href="`@/assets/icons/sprites.svg#${vQ.name}`" />
                </svg>
            </div>
            <h4 class="types__item-display-name">{{ vQ.displayName }}</h4>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            data: [
                {
                    id: 0,
                    name: "vegan",
                    displayName: "vegan",
                },
                {
                    id: 1,
                    name: "hot",
                    displayName: "hot",
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

.types
    display: flex

.types__item
    display: flex

    align-items: center

.types__item-box-1
    background-color: #fff
    box-shadow: 0 5px 10px rgba(#000, .25)

    border-radius: 50%

.types__item-icon
    min-width: rem(16)
    width: rem(16)
    min-height: rem(16)
    height: rem(16)
</style>
