<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import dayjs from 'dayjs';
  import { addNote, selectedTaskId, taskList, draggingElement } from '../assets/store';

  const task = taskList.value.find(task => task.id === selectedTaskId.value)
  const newNoteText = ref('');
  const selectedNoteId = ref(0);
  const wrapperRef = ref();
 
  const onCreateNewNote = () => {
    if (!newNoteText.value || !task) return;

    addNote(task.id, newNoteText.value)
    newNoteText.value = '';
  }

  onMounted(() => {
    console.log('mounter')
  })
  // console.log(2222)
  onUnmounted(() => {
    console.log('unmounter')
  })
  // console.log(3333)
</script>

<template>
  <div ref="wrapperRef" class="task-notes">
    <h3>{{ task?.title }}</h3>

    <input class="task-notes__input" v-model="newNoteText" type="text" @keyup.enter="onCreateNewNote" placeholder="Заметка" />

    <ul class="task-notes__list">
      <li
        @click="selectedNoteId = note.id"
        draggable="true" 
        class="task-notes__item" 
        v-for="note in task?.notes" 
        :key="note.id"
        :aria-selected="note.id === selectedNoteId"
        @dragstart="() => {draggingElement.id = note.id; draggingElement.type = 'note'}"
        @dragend="() => {draggingElement.id = 0; draggingElement.type = 'note'}"
      >
        <p>{{ note.text }}</p>
        <span>{{ dayjs(note.date).format('DD.MM.YYYY HH:mm') }}</span>
      </li>
    </ul>

  </div>
</template>

<style scoped>
  .task-notes {
    width: calc(100% - 200px);
    height: 400px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: var(--white-color);
    border-top: 1px solid #E4E4E7;
    box-shadow: 0px 1px 3px 0px #1018281A;
    box-shadow: 0px 1px 2px -1px #0000001A;
    padding: 0 100px;
  }

  .task-notes__input {
    width: 100%;
    outline: 0;
    border: 0;
    border-bottom: 1px solid var(--accent-color);
    background-color: transparent;
    color: var(--black-color);
    font-size: 20px;

    padding: 8px 0;
    margin-bottom: 24px;
  }

  .task-notes__list {
    list-style: none;
    padding: 8px 0;
    margin: 0;
    margin-top: 16px;
    max-height: 200px;
    overflow-y: auto;
  }

  .task-notes__item {
    padding: 8px 16px 8px 0;
    border-bottom: 1px solid var(--gray-color);
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 24px;

    p {
      width: 600px;
      margin: 0;
      word-break: break-all;
    }

    &[aria-selected="true"]  {
      /* border: 1px solid var(--accent-color); */
      color: var(--accent-color)
    }
  }
</style>