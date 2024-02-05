<script setup lang="ts">
  import { effect, ref } from 'vue';
  import { taskList, addTask } from '../assets/store';

  const inputValue = ref('');
  const inputRef = ref()

  effect(() => {
    inputRef.value && inputRef.value.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        addTask(inputValue.value).then((res) => res && (inputValue.value = ''));
      }
      if (e.key === 'Escape') {
        inputValue.value = ''
        document.getElementById('app')!.focus();
        console.log(document.activeElement)
      }
    })
  })


</script>

<template>
  <div ref="inputRef" class="input-wrapper">
    <input 
      v-model="inputValue" 
      :disabled="taskList.length === 20" 
      class="input" 
      type="text" 
      placeholder="Новая цель..." 
    />
    <span class="input-hotkey">enter</span>
  </div>
</template>

<style scoped>
  .input-wrapper {
    position: relative;
    margin-bottom: 24px;

  }

  .input {
    outline: 0;
    border: 0;
    border-bottom: 1px solid var(--accent-color);
    background-color: transparent;
    color: var(--black-color);
    font-size: 20px;
    padding: 8px 60px 8px 0;
    width: 400px;

    &::placeholder {
      color: var(--gray-color);
    }
  }

  .input-hotkey {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      color: var(--gray-color);
      text-transform: uppercase;
      font-size: 14px;
    }
</style>