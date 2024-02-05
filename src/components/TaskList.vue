<script setup lang="ts">
  import { ref } from 'vue';

  import TaskComponent from './Task.vue';
  import Button from './Button.vue';
  import Input from './Input.vue';
  import { addTask, removeTask, taskList, draggingElement, selectedTaskId } from '../assets/store';
import { MOCK_TASKS } from '../assets/constants';
import { setStorageValue } from '../assets/utils';

// const selectedTask = ref(0)
  const shouldShowModal = ref(false);
  const isCreating = ref(false);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      shouldShowModal.value = false;
      selectedTaskId.value = 0;
    }
  })

</script>

<template>
  <div class="task-list">
    <!-- <Button v-if="!isCreating" @click="() => isCreating = true">
      + Новая цель на 2024 г.
    </Button> -->
    <Input @close="() => isCreating = false" />
    <div class="task-list-wrapper">
      <TaskComponent 
        v-for="task in taskList" 
        :key="task.id" 
        :task="task" 
        :draggable="!task.completed && task.id !== selectedTaskId"
        @dragstart="() => {draggingElement.id = task.id; draggingElement.type = 'task'}"
        @dragend="() => {draggingElement.id = 0; draggingElement.type = 'task'}"
        :active="task.id === selectedTaskId"
        v-on:click="() => !task.completed && (selectedTaskId = task.id)"
      />
    </div>
  </div>
</template>

<style scoped>
  .task-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      text-align: left;
    }
  }

  .hidden {
    .task-list-wrapper {
      opacity: 0;
    }
  }

  .covered {
    .task-list-wrapper {
      opacity: 0.05;
    }
  }

  

  .task-list-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    place-items: center;
    column-gap: 200px;

    transition: all .2s;
  }
  /* .task-list {
    max-width: 400px;
    width: 100%;
    font-size: 20px;
    min-height: 24px;
    height: auto;
    color: var(--black-color);
  } */
</style>