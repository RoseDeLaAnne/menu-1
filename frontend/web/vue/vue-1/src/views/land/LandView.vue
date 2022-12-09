<template>
  <div class="page">
    <div class="page__box-1">
      <div class="page__loader"></div>
      <h1 class="page__title">LandView</h1>
      <router-link to="/menu" class="page__link">Menu</router-link>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import @/assets/styles/functions
@import @/assets/styles/keyframes
@import @/assets/styles/mixins
@import @/assets/styles/variables

.page
  padding-top: rem(128)
  padding-right: calc(rem(32) + (64 - 32) * ((100vw - 425px) / (1920 - 425)))
  padding-left: calc(rem(32) + (64 - 32) * ((100vw - 425px) / (1920 - 425)))

  display: flex
  flex-direction: column

  align-items: center
  justify-content: center

  @include mediaW($mobile-l)
    padding-right: calc(rem(16) + (32 - 16) * ((100vw - 280px) / (1920 - 280)))
    padding-left: calc(rem(16) + (32 - 16) * ((100vw - 280px) / (1920 - 280)))

.page__box-1
  display: flex
  flex-direction: column

  align-items: center

.page__loader
  width: calc(rem(256) + (512 - 256) * ((100vw - 280px) / (1920 - 280)))
  height: calc(rem(256) + (512 - 256) * ((100vw - 280px) / (1920 - 280)))

  background: linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%)
  box-shadow: 0 5px 10px rgba(#ffcad4, .5)

  border-radius: 50%

  animation: fancyBorderRadius 2.5s ease-in-out infinite alternate

.page__title
  margin-top: em(16)

  // font-size: rem(80)
  font-size: calc(rem(48) + (80 - 48) * ((100vw - 280px) / (1920 - 280)))
  font-weight: 600

  text-align: center

  text-transform: uppercase
  letter-spacing: .2em

.page__link
  margin-top: em(8)

  // font-size: rem(32)
  font-size: calc(rem(24) + (32 - 24) * ((100vw - 280px) / (1920 - 280)))
  font-weight: 300

  text-align: center

  text-transform: uppercase
  letter-spacing: .2em

  background: -webkit-linear-gradient(#ffcad4, #333)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
</style>
