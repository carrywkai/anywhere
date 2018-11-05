<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide class="list-wrapper" v-for="(page, index) in pages" :key="index">
        <li class="list-img-box" v-for="item in page" :key="item.id">
          <img class="list-img" :src="item.imgUrl">
          <div class="list-text">{{item.text}}</div>
        </li>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      listImg: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '景点门票景点门票景点门票'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          text: '泡温泉'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          text: '一日游'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          text: '游乐场'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ee/5114069893722102.png',
          text: '游山玩水'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          text: '必游榜单'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          text: '自然风光'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          text: '亲子游'
        },
        {
          id: '0009',
          imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          text: '打卡圣地'
        },
        {
          id: '0010',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          text: '全部玩乐'
        }

      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.listImg.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = [] // 数组里面还能存放数组
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins'
  .wrapper
    width: 100%
    .list-wrapper
      width: 100%
      .list-img-box
        width: 25%
        float: left
        text-align center
        .list-img
          width: 1rem
          height: 1rem
          padding .2rem 0
        .list-text
          ellipse()
          /*overflow hidden*/
          /*white-space nowrap*/
          /*text-overflow ellipsis*/
</style>
