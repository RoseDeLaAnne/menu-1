<template>
    <section class="menu">
        <div v-for="vQ in data" :key="vQ.id" class="menu__item">
            <div class="menu__item-box-1">
                <h6 class="menu__item-category">
                    {{ vQ.category.displayName }}
                </h6>
                <h6 class="menu__item-weight">{{ vQ.weight }} g</h6>
            </div>
            <div class="menu__item-box-2">
                <h6 class="menu__item-name">{{ vQ.displayName }}</h6>
                <h6 class="menu__item-price">$3.60</h6>
            </div>
            <router-link :to="`/item/${vQ.id}`" class="menu__item-box-3">
                <img
                    src="@/assets/images/main/item-img.jpg"
                    alt=""
                    class="menu__item-img"
                />
                <div
                    v-for="vW in vQ.types"
                    :key="vW.id"
                    class="menu__item-box-31"
                >
                    <img
                        :src="require(`@/assets/icons/main/${vW.name}.svg`)"
                        alt=""
                        class="menu__item-icon"
                    />
                </div>
            </router-link>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            data: [
                {
                    id: 0,
                    category: {
                        name: "salad",
                        displayName: "salad",
                    },
                    weight: 342,
                    name: "halumini",
                    displayName: "Halumini",
                    price: 3.6,
                    types: [
                        {
                            id: 0,
                            name: "vegan",
                        },
                    ],
                    imageUrl: "",
                },
                {
                    id: 1,
                    category: {
                        name: "salad",
                        displayName: "salad",
                    },
                    weight: 342,
                    name: "halumini",
                    displayName: "Halumini",
                    price: 3.6,
                    types: [
                        {
                            id: 0,
                            name: "vegan",
                        },
                    ],
                    imageUrl: "",
                },
                {
                    id: 2,
                    category: {
                        name: "salad",
                        displayName: "salad",
                    },
                    weight: 342,
                    name: "halumini",
                    displayName: "Halumini",
                    price: 3.6,
                    types: [
                        {
                            id: 0,
                            name: "vegan",
                        },
                    ],
                    imageUrl: "",
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
@import @/assets/styles/variables

.menu
    display: flex

    align-items: flex-start

    @include mediaW($mobile-xs)
        flex-direction: column

.menu__item
    padding-top: em(48)

    max-width: rem(384)

    background-color: #DFE9C0

    border-radius: rem(16)

    transition: background-color .5s ease-in-out

    animation: scaleFromZeroToOne .5s ease-in-out, opacityFromZeroToOne .25s ease-in-out

    cursor: pointer

    &:hover
        background-color: rgba(#DFE9C0, .75)

    &:nth-child(odd)
        .menu__item-img
            width: 100%
            max-width: rem(384)
            height: rem(384)

    &:nth-child(even)
        .menu__item-img
            width: rem(384)
            height: rem(320)

.menu__item-box-1,
.menu__item-box-2,
.menu__item-box-3,
.menu__item-box-31
    position: relative

    display: flex

.menu__item-box-1,
.menu__item-box-2
    padding-right: em(16)
    padding-left: em(16)

    align-items: center
    justify-content: space-between

.menu__item-box-1
    margin-bottom: em(8)

.menu__item-box-2
    margin-bottom: em(24)

.menu__item-box-3
    border-radius: 0 0 rem(16) rem(16)

    overflow: hidden

.menu__item-box-31
    padding: em(8)

    position: absolute

    bottom: rem(24)
    right: rem(16)

    align-items: center
    justify-content: center

    background-color: #fff
    box-shadow: 0 5px 10px rgba(#000, .125)

    border-radius: 50%

    transition: box-shadow .5s ease-in-out

    animation: scaleMenuItemIcon 1s ease-in-out infinite alternate

    cursor: pointer

    &:hover
        box-shadow: 0 5px 10px rgba(#000, .25)

.menu__item-category,
.menu__item-weight
    font-weight: 300

.menu__item-name,
.menu__item-price
    font-size: rem(24)
    font-weight: 700

    letter-spacing: .05em

.menu__item-img
    border-radius: 0 0 rem(16) rem(16)

    transition: transform 1s ease-in-out

    // animation: objectPosition 7.5s linear infinite

    &:hover
        transform: scale(1.15)

.menu__item-icon
    width: rem(32)
    height: rem(32)
</style>
