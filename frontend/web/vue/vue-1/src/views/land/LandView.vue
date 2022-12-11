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
.page
  padding-top: rem(128)
  @include adaptiveValue('padding-right', 32, 64, 1920, 425)
  @include adaptiveValue('padding-left', 32, 64, 1920, 425)

  display: flex
  flex-direction: column

  align-items: center
  justify-content: center

  @include mediaW($mobile-l)
    @include adaptiveValue('padding-right', 16, 32, 425, 280)
    @include adaptiveValue('padding-left', 16, 32, 425, 280)

  @include mediaW($mobile-xs)
    padding-right: rem(16)
    padding-left: rem(16)

.page__box-1
  display: flex
  flex-direction: column

  align-items: center

.page__loader
  @include adaptiveValue('width', 224, 512, 1920, 280)
  @include adaptiveValue('height', 224, 512, 1920, 280)

  background: linear-gradient(90deg, hsla(298, 68%, 90%, 1) 0%, hsla(30, 82%, 91%, 1) 100%)
  box-shadow: 0 5px 10px rgba(#ffcad4, .5)

  border-radius: 50%

  animation: fancyBorderRadius 2.5s ease-in-out infinite alternate

  @include mediaW($mobile-xs)
    width: rem(224)
    height: rem(224)

.page__title
  margin-top: em(16)

  @include adaptiveValue('font-size', 32, 80, 1920, 280)

  font-weight: 600

  text-align: center

  text-transform: uppercase
  letter-spacing: .2em

  @include mediaW($mobile-xs)
    font-size: rem(32)

.page__link
  margin-top: em(8)

  @include adaptiveValue('font-size', 20, 32, 1920, 280)
  font-weight: 300

  text-align: center

  text-transform: uppercase
  letter-spacing: .2em

  background: -webkit-linear-gradient(#ffcad4, #333)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

  @include mediaW($mobile-xs)
    font-size: rem(20)
</style>
