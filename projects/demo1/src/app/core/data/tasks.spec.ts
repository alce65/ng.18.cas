import { getTasks, getTasksAsync, getTasksRx } from "./tasks";

describe('getTasks', () => {
  it('should return the tasks', () => {
    const result = getTasks();
    expect(result.length).toEqual(3);
  });
});

describe('getTasksAsync', () => {
  it('should return the tasks', async () => {
    const result = await getTasksAsync();
    expect(result.length).toEqual(3);
  });
});

describe('getTasksRx', () => {
  it('should return the tasks', () => {
    getTasksRx().subscribe(tasks => {
      expect(tasks.length).toEqual(3);
    });
  });
});
