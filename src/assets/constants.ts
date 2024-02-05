import { Task } from "./types";
import { setStorageValue } from "./utils";

export const MOCK_TASKS: Task[] = [
  {
    id: 1,
    title: 'Занятие спортом не менее 3х раз в неделю',
    completed: false,
    notes: []
  },
  {
    id: 2,
    title: 'Проверять здоровье не менее 2 раза в год',
    completed: false,
    notes: []
  },
  {
    id: 3,
    title: 'Экспертиза в React и JS (под капотом)',
    completed: true,
    notes: []
  },
  {
    id: 4,
    title: 'Бросить курить',
    completed: false,
    notes: []
  },
  {
    id: 5,
    title: 'Запустить приложение по трекингу задач',
    completed: false,
    notes: []
  },
  {
    id: 6,
    title: 'Бросить курить',
    completed: true,
    notes: []
  },
  {
    id: 7,
    title: 'Запустить приложение по трекингу задач',
    completed: false,
    notes: []
  },
  {
    id: 8,
    title: 'Научиться играть на пианино',
    completed: false,
    notes: []
  },
  {
    id: 9,
    title: 'Занятие спортом не менее 3х раз в неделю',
    completed: false,
    notes: []
  },
  {
    id: 10,
    title: 'Проверять здоровье не менее 2 раза в год',
    completed: false,
    notes: []
  },
]

setStorageValue('taskList', MOCK_TASKS)