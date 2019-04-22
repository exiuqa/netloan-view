<template>
  <i :class="classes" :style="styles"></i>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class IconFont extends Vue {
  @Prop()
  private icon: string;
  @Prop({ default: 16 })
  private size: number;
  @Prop({ default: "#22f" })
  private color: string;

  get classes() {
    return ["iconfont", `icon-${this.icon}`];
  }

  get styles() {
    return {
      color: this.color,
      fontSize: `${this.size}px`
    };
  }
}
</script>
