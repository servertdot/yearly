<script setup lang="ts">
  import { taskList } from '../assets/store';

</script>

<template>
  <div class="task-counter">
    {{ taskList.length }} / 20
  </div>
</template>

<style scoped>
  .task-counter {
    color: var(--accent-color);
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>