<script setup lang="ts"></script>

<template>
  <div class="current-date">{{ new Date().toLocaleDateString() }}</div>
</template>

<style scoped>
  .current-date {
    color: var(--accent-color);
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
</style>