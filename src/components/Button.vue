<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
  .button {
    outline: 0;
    border: 0;
    background-color: transparent;
    color: var(--accent-color);
    font-size: 20px;
    transition: all .3s;
    margin-bottom: 32px;
    /* margin-left: 70px; */

    &:hover {
      color: var(--accent-dark);
    }
  }
</style>