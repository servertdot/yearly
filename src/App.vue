<script setup lang="ts">
  import { ref } from 'vue';

  import Title from './components/Title.vue'
  import TaskList from './components/TaskList.vue';
  import OpenEye from './components/Icons/OpenEye.vue';
  import CoveredEye from './components/Icons/CoveredEye.vue';
  import CloseEye from './components/Icons/CloseEye.vue';
  import GarbageClosed from './components/Icons/GarbageClosed.vue';
  import GarbageOpen from './components/Icons/GarbageOpen.vue';
  import TaskCounter from './components/TaskCounter.vue';
  import CurrentDate from './components/CurrentDate.vue';
  import TaskNotes from './components/TaskNotes.vue';
  import { getAndConvertStorageValue, setStorageValue } from './assets/utils';
  import { draggingElement, removeNote, removeTask, selectedTaskId } from './assets/store';

  const isVisibleText = ref(Boolean(getAndConvertStorageValue('isVisibleText', 'false')));
  const isHovered = ref(false);

  const handleChangeVisibleText = () => {
    isVisibleText.value = !isVisibleText.value;
    setStorageValue('isVisibleText', !isVisibleText.value)
  }

  const handleClickCoveredEye = () => {
    isVisibleText.value = !isVisibleText.value;
    setStorageValue('isVisibleText', isVisibleText.value)
  }

  const onDropElement = () => {
    if (draggingElement.value.type === 'task') {
      removeTask(draggingElement.value.id)
    }
    if (draggingElement.value.type === 'note') {
      removeNote(draggingElement.value.id);
    }
  }

</script>

<template>
  <div class="wrapper">
    <TaskCounter />
    <div class="icon-wrapper">
      <OpenEye 
        v-if="isVisibleText && !isHovered" 
        @mouseenter="isHovered = true" 
        @click="handleChangeVisibleText" 
      />
      <CoveredEye 
        v-if="isHovered" 
        @mouseleave="isHovered = false" 
        @click="handleClickCoveredEye" 
      />
      <CloseEye 
        v-if="!isVisibleText && !isHovered" 
        @mouseenter="isHovered = true" 
        @click="handleChangeVisibleText" 
      />
    </div>

    <Title>
      Your perfect year
    </Title>
    <TaskList :class="{ 'covered': isHovered, 'hidden': !isVisibleText }" />
    
    <TaskNotes v-if="selectedTaskId" />

    <div class="garbage-wrapper">
      <GarbageOpen @dragenter.prevent @dragover.prevent @drop="onDropElement" v-if="draggingElement.id" />
      <GarbageClosed v-if="!draggingElement.id" />
    </div>

    <CurrentDate />
  </div>
</template>

<style scoped>
  .wrapper {
    max-width: 1440px;;
    padding: 50px 100px;
    margin: 0 auto;
  }

  .icon-wrapper {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .garbage-wrapper {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 11;
  }
</style>
