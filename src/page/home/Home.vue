<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-list></home-list>
    <home-hot></home-hot>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeBanner from './components/HomeBanner'
import HomeList from './components/HomeList'
import HomeHot from './components/HomeHot'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeList,
    HomeHot
  }
}
</script>

<style scoped>

</style>
