<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in bannerImgList" :key="item.id">
        <img class="banner-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      bannerImgList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/1b/4143c7e0bfe78d02.jpg_750x200_5a220f6e.jpg'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/16/bee89c87307a3302.jpg_750x200_2c6299b9.jpg'
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active //使用>>>箭头来实现样式穿透，不受scoped影响
    background: #fff
  .wrapper
    width: 100%
    height: 26.57vw  // 图片的宽高比，解决图片加载时的抖动问题
    .banner-img
      width:100%
</style>
