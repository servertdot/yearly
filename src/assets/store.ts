import { ref } from "vue";
import { getAndConvertStorageValue, setStorageValue } from "./utils";
import { Task } from "./types";

export const taskList = ref<Task[]>(getAndConvertStorageValue('taskList', '[]') || [])
export const draggingElement = ref<{id: number, type: 'task' | 'note'}>({
  id: 0,
  type: 'task'
});
export const selectedTaskId = ref(0);

export const addTask = async (title: string) => {
  const newTask: Task = {
    id: taskList.value.length + 1,
    title,
    completed: false,
    notes: []
  };

  if (taskList.value.length > 20) {
    return false;
  }

  taskList.value.push(newTask);
  setStorageValue('taskList', taskList.value)

  return true;
}

export const removeTask = async (id: number) => {
  taskList.value = taskList.value.filter(item => item.id !== id);
  setStorageValue('taskList', taskList.value)
}

export const addNote = async (taskId: number, text: string) => {
  const index = taskList.value.findIndex(task => task.id === taskId);
  taskList.value[index].notes.unshift({
    id: taskList.value[index].notes.length + 1,
    text,
    date: new Date().toISOString()
  });
  setStorageValue('taskList', taskList.value)
}

export const removeNote = async (id: number) => {
  const index = taskList.value.findIndex(task => task.notes.some(note => note.id === id));
  taskList.value[index].notes = taskList.value[index].notes.filter(note => note.id !== id);
  setStorageValue('taskList', taskList.value)
}
