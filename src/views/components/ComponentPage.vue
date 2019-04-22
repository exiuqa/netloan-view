<template>
  <div>
    <div class="about">
      <split-pane> </split-pane>
    </div>
    <hr style="height:5px;border:none;border-top:10px groove skyblue;" />
    <div>
      <icon-font icon="duzheguanli"></icon-font>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SplitPane from "@/components/SplitPane.vue";

@Component({
  components: { SplitPane }
})
export default class ComponentPage extends Vue {}
</script>
<style lang="less" scoped>
.about {
  width: 600px;
  height: 200px;
  background: #d8bc19;
}
</style>
