<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25b2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25b2; Expand</span>
    </div>
    <!-- Toggable -->
    <slot v-if="open">
      <div>Default content</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #bbbbbb;
  padding: 3px;
  cursor: pointer;
}
</style>
