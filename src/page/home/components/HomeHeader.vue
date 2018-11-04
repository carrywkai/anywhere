<template>
  <div class="home-header-box">
    <div class="icon iconfont icon-fanhui"></div>
    <i class="icon iconfont icon-sousuo"></i>
    <input type="search" class="header-search" placeholder="请输入城市/景点/旅游主题">
    <div class="city-option">
      <span class="current-city">南京</span>
      <i class="icon iconfont icon-jiantouxia"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!-- 使用stylus要下载二个依赖包：npm install stylus --save 和 npm install stylus-loader --save -->
<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .home-header-box
    display flex
    height: .8rem
    background $commonColor
    .icon-fanhui
      width: .8rem
      line-height: .8rem
      color: #fff
      margin-left .2rem
     .icon-sousuo
       position absolute
       top: .26rem
       left: .96rem
    .header-search
      width: 100%
      height: .6rem
      margin-top .1rem
      border-radius .1rem
      font-size .26rem
      color: #e4e7ea
      padding-left .46rem
    .city-option
      width: 1.6rem
      height: .8rem
      line-height .8rem
      text-align center
      color: #fff
</style>
