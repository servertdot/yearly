<script setup lang="ts">
  import { Task } from '../assets/types';

  const props = defineProps<{
    task: Task,
    active: Boolean
  }>();

  const getClassName = () => {
    if (props.active) {
      return 'task active';
    }

    if (props.task.completed) {
      return 'task completed';
    }
    return 'task';
  }
</script>

<template>
  <div :class="getClassName()">
    {{ task.title }}

    <svg class="task-underline" width="449" height="19" viewBox="0 0 449 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6.1994C13.1218 10.5514 27.0586 9.52851 38.7681 9.55892C63.6389 9.62352 88.5085 8.49703 113.331 7.03928C193.695 2.31969 274.078 2 354.563 2C384.021 2 472.395 2 442.937 2" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
      <path d="M38.1147 9.5589C41.8415 10.3871 45.6036 10.5852 49.4065 10.8654C66.9127 12.1553 84.4921 12.5071 102.039 12.7318C169.126 13.5906 236.247 12.0072 303.33 11.4253C336.656 11.1362 371.549 9.72727 404.303 16.2779" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
    </svg>
  </div>
</template>

<style scoped>
  .task {
    min-height: 400px;
    max-width: 400px;
    width: 100%;
    font-size: 20px;
    min-height: 24px;
    height: auto;
    color: var(--black-color);
    position: relative;
    /* margin-bottom: 24px; */
    transition: all .2s;

    &.active {
      .task-underline {
        visibility: initial;
      }
    }

    &.completed {
      text-decoration: line-through;
      color: var(--gray-color);
    }

    &:hover:not(.completed) {
      /* .task-underline {
        visibility: initial;
      } */
      color: var(--accent-color);
    }
  }

  .task-underline {
      position: absolute;
      visibility: hidden;
      top: 100%;
      left: 0;
      color: var(--accent-color);
    }

</style>