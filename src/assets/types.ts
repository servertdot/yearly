export type TaskNote = {
  id: number;
  text: string;
  date: string;
};

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  notes: TaskNote[];
};