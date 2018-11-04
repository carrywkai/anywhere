<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-list></home-list>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeBanner from './components/HomeBanner'
import HomeList from './components/HomeList'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeList
  }
}
</script>

<style scoped>

</style>
