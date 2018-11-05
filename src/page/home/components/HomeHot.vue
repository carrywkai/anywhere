<template>
  <div class="home-hot">
    <div class="hot-text">
      本周热榜榜单
    </div>
    <div class="hot-ul-box" ref="scroll">
      <ul class="hot-box">
        <li class="hot-li" v-for="item in hotList" :key="item.id">
          <div class="hot-img-box"><img class="hot-img" :src="item.imgUrl"></div>
          <div>{{ item.hotText }}</div>
          <div>￥<em style="color: #ff8300;">{{item.hotPrice}}</em>起</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeHot',
  data () {
    return {
      hotList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_250x250_1cd1e3cf.jpg',
          hotText: '南京总统府',
          hotPrice: '36.00'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/95/9579bcb3e5a206cc90.water.jpg_250x250_baa846f5.jpg',
          hotText: '大报恩寺遗址公园',
          hotPrice: '40.00'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p18/201211/03/db9f2bb27ee40bf893835fbb.jpg_250x250_857f9de3.jpg',
          hotText: '美龄宫',
          hotPrice: '25.28'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/201312/03/38da27f8a2ad319ec8d65eac.jpg_250x250_46d50826.jpg',
          hotText: '红山森林动物园',
          hotPrice: '38.1'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_250x250_850d6e0e.jpg',
          hotText: '中山陵',
          hotPrice: '25.8'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/fa/fa9b584a8b8e47e9.water.jpg_250x250_aed5c0ab.jpg',
          hotText: '明孝陵',
          hotPrice: '25.8'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_250x250_6a2c256b.jpg',
          hotText: '牛首山文化旅游区',
          hotPrice: '36.00'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1701/b8/b806750f5c23b867a3.img.png_250x250_d7a9bcdd.png',
          hotText: '夫子庙',
          hotPrice: '12.00'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1610/52/52600e65f4aee28aa3.img.jpg_250x250_0e0bc423.jpg',
          hotText: '湖熟菊花园',
          hotPrice: '36.00'
        },
        {
          id: '0010',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_250x250_c4159651.jpg',
          hotText: '南京海底世界',
          hotPrice: '95'
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollbar: true
      })
    })
  }
}
</script>

<style scoped lang="stylus">
   .home-hot
     width: 100%
     margin-top .6rem
     .hot-text
       width: 100%
       height: .8rem
       line-height .8rem
       border: .02rem solid #eee
       font-size .3rem
       padding-left .3rem
     .hot-ul-box
       width: 100%
       .hot-box
         width: 24.6rem
         overflow hidden
         .hot-li
           padding: .2rem
           text-align center
           float: left
           .hot-img-box
             width:2rem
             height:2rem
             margin-bottom .16rem
             .hot-img
               width:2rem
               height:2rem
</style>
