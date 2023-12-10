<!--
 * @Description: 画布区域
 * @Author: Sunly
 * @Date: 2023-12-04 03:39:42
-->
<script lang="ts" setup>
import VueDraggable from "vuedraggable";
import { shallowReactive } from "vue";
import { useLowCodeStore } from "../../store/low-code-store";

const lowCodeStore = useLowCodeStore();

const components = shallowReactive([]);

const handleAdd = ({ newIndex }: { newIndex: number }) => {
  const element = components[newIndex];
  if (element) {
    lowCodeStore.setSelected(element);
  }
};
</script>

<template>
  <div class="canvas-area">
    <VueDraggable
      class="dragArea list-group"
      :list="components"
      :group="{ name: 'components', ghostClass: 'ghost', animation: 300 }"
      item-key="id"
      @add="handleAdd"
    >
      <template #item="{ element }">
        <div class="material-item">
          <component
            :is="element.component"
            :key="element.id"
            v-bind="element.props"
          />
        </div>
      </template>
    </VueDraggable>
  </div>
</template>

<style lang="scss" scoped>
.canvas-area {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  flex-grow: 1;
  .list-group {
    min-height: calc(100vh - 60px - 8px * 2 - 8px * 2);
  }
}
</style>
../../store/low-code-store
