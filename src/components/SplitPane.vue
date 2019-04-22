<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffSetPercent }">
      <button @click="handClick">sss</button>
    </div>
    <div
      class="pane pane-trigger-con"
      @mousedown="handMousedown"
      :style="{ left: triggerLeft, width: `${triggerWidth}px` }"
    ></div>
    <div class="pane pane-right" :style="{ left: leftOffSetPercent }"></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SplitPane extends Vue {
  @Prop({ default: 8 })
  private triggerWidth: number;

  private leftOffSet: number = 0.3;
  private currentTriggerWidth: number = this.triggerWidth;

  get leftOffSetPercent() {
    return `${this.leftOffSet * 100}%`;
  }
  get triggerLeft() {
    return `calc(${this.leftOffSet * 100}% - ${this.currentTriggerWidth /
      2}px)`;
  }

  handClick() {
    this.leftOffSet -= 0.02;
  }

  handMousedown(event: any) {
    document.addEventListener("mousemove", this.handMousemove);
  }

  handMousemove(event: any) {
    const _this: any = this;
    const el: any = _this.$refs.outer;
    debugger;
    const outerRect: any = el.getBoundingClintRect();
    console.log(event.pageX);
    console.log(outerRect.left);
  }
}
</script>

<style lang="less" scoped>
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .pane {
    position: absolute;
    height: 100%;
    &-left {
      background: #42b983;
    }
    &-right {
      right: 0;
      background: red;
    }
    &-trigger-con {
      height: 100%;
      background: #d31d87;
      z-index: 10;
    }
  }
}
</style>
