<template>
  <div class="home">
    <div class="left" @click="leftMove">左移动</div>
    <div class="right" @click="rightMove">右移动</div>
    <div class="demo" ref="demo">
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag0">我是第一个</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag1"></div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag2">我是第三个你你你</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag3">我是第四个你你你</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag4">我是第五个</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag5">我是第六个</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag6">我是第六个那您</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag7">我是第八</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag8">我第九</div>
      <div class="tag" :style="{transform:'translateX('+moveWidth+'px)'}" ref="tag9">我是第十个一</div>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "home",
  components: {},
  data () {
    return {
      moveWidth: 0,
      tagSum: [],
      moveIndex: 0,
      moveFalg: true,
      moveRightFalg: true
    };
  },
  created () {
    this.$nextTick(function () {
      let tag = 0;
      for (let i = 0; i < 10; i++) {
        tag += this.$refs["tag" + i].offsetWidth;
        this.tagSum.push(tag);
      }
    });
    let arr = [{ id: 1 }, { id: 13 }, { id: 2 }];
  },
  methods: {
    filterTrue (data) {
      let arr = [],
        obj = {};
      for (let i = 0; i < data.length; i++) {
        const e = data[i];
        for (const key in e) {
          if (!obj[e[key]]) {
            arr.push(e);
            obj[e[key]] = 1;
          }
        }
      }
      if (arr.length != data.length) {
        return true;
      } else {
        return false;
      }
    },
    leftMove () {
      if (!this.moveFalg) return;
      this.moveRightFalg = true;
      let demo = this.$refs.demo.offsetWidth;
      let tag = 0;
      let index = 0;
      // 计算节点算出最后一个节点的索引
      for (let i = this.moveIndex; i < 10; i++) {
        tag += this.$refs["tag" + i].offsetWidth;
        if (tag >= demo) {
          index = i; //超出的节点
          break;
        }
      }
      let sum = this.tagSum[10 - 1]; //总的长度
      // 计算每次移动前剩下的距离,如果不够标记阻止
      let sub = sum - this.tagSum[index - 1];
      if (sub < demo) {
        this.moveWidth = -((sum + this.moveWidth) % demo) + this.moveWidth;
        this.moveFalg = false;
        return;
      } else {
        // 移动到节点的位置
        this.moveWidth = -this.tagSum[index - 1];
        this.moveIndex = index;
      }
    },
    rightMove () {
      // 点击右边移动
      if (this.moveWidth == 0) return;
      // 点击改变阻止状态
      this.moveFalg = true;
      let demo = this.$refs.demo.offsetWidth;
      if (
        this.tagSum[this.moveIndex - 1] != Math.abs(this.moveWidth) &&
        this.moveRightFalg
      ) {
        // 如果不相等说明是最后一个位置,计算是那个索引超出的
        let tag = 0;
        for (let i = this.moveIndex; i < 10; i++) {
          tag += this.$refs["tag" + i].offsetWidth;
        }
        this.moveWidth = this.moveWidth + (tag % demo);
        this.moveRightFalg = false;
      } else {
        let tag = 0;
        let index = 0;
        for (let i = this.moveIndex; i >= 0; i--) {
          tag += this.$refs["tag" + i].offsetWidth;
          if (tag > demo) {
            index = i;
            break;
          }
        }
        // 如果下一次距离不够
        if (Math.abs(this.moveWidth) < demo) {
          this.moveWidth = 0;
          this.moveIndex = 0;
        } else {
          this.moveWidth = -this.tagSum[index - 1];
          this.moveIndex = index;
        }
      }
    }
  }
};
</script>
<style lang='scss'>
.home {
}
</style>
