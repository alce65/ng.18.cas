export type Task = {
  id: string;
  title: string;
  owner: string;
  isDone: boolean;
};

export type CreateTaskDTO = {
  title: string;
  owner: string;
};

export type UpdateTaskDTO = {
  title?: string;
  owner?: string;
  isDone?: boolean;
};
