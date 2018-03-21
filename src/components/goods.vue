<style lang="stylus" scoped>
  .goods {
    display: flex;
    .left {
      width: 300px;
      height: 300px;
      background: gray url('https://gd4.alicdn.com/imgextra/i4/3170028574/TB2Xcy.qH8kpuFjy0FcXXaUhpXa_!!3170028574.jpg') no-repeat center center ;
      background-size : 100% 100%;
      position relative
      .magnifier {
        position absolute
        width 100px
        height 100px
        background skyblue
        opacity .5
        left 30px
        top 30px
      }
    }
    .right {
      width: 300px;
      height: 300px;
      border: 1px solid orange;
      position relative
      overflow hidden
      .big-pic {
        position absolute
        top 0
        left 0
        width 900px
        height 900px
        background gray url('https://gd4.alicdn.com/imgextra/i4/3170028574/TB2Xcy.qH8kpuFjy0FcXXaUhpXa_!!3170028574.jpg') no-repeat center center;
        background-size 100% 100%
      }
    }
  }
</style>

<template>
  <div class="goods">
      <div class="left" 
      @mouseover.stop.capture="mouse_over"
      @mousemove.stop.capture="mouse_move"
      @mouseout.stop.capture="mouse_out"
      >
        <div class="magnifier" :style="bind_style_magnifier()" v-show="magnifier.is_show"></div>
      </div>
      <div class="right" v-show="this.magnifier.is_show">
        <div class="big-pic" :style="bind_style_big_pic()"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'goods',
  mounted () {
    
  },
  data () {
    return {
      magnifier: {
        x: 100,
        y: 100,
        is_show: false
      }
    }
  },
  computed: {
    pic_content () {
      let e = document.getElementsByClassName('left')[0]
      return {
        x: e.getBoundingClientRect().left,
        y: e.getBoundingClientRect().top
      }
    }
  },
  methods: {
    mouse_over (e) {
      this.magnifier.is_show = true
    },
    mouse_move (e) {
      this.magnifier.x = e.clientX-this.pic_content.x-50
      this.magnifier.y = e.clientY-this.pic_content.y-50
    },
    mouse_out (e) {
      this.magnifier.is_show = false
    },
    bind_style_magnifier () {
      let x = this.magnifier.x
      let y = this.magnifier.y
      if (x>200) x=200
      if (x<0) x=0
      if (y>200) y=200 
      if (y<0) y=0 
      return {
        'left': `${x}px`,
        'top': `${y}px`
      }
    },
    bind_style_big_pic () {
      let x = this.magnifier.x
      let y = this.magnifier.y
      if (x>200) x=200
      if (x<0) x=0
      if (y>200) y=200 
      if (y<0) y=0
      let xx = x*3
      let yy = y*3
      return {
        'left': `-${xx}px`,
        'top': `-${yy}px`
      }
    }
  }
}
</script>

