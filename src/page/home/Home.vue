<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeBanner from './components/HomeBanner'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner
  }
}
</script>

<style scoped>

</style>
