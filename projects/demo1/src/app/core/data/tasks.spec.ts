import { MockDataService } from "./tasks";


describe('MockDataService', () => {
  let service: MockDataService
  beforeAll(() => {
    service = new MockDataService();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('getTasks', () => {
    it('should return the tasks', () => {
      const result = service.getTasks();
      expect(result.length).toEqual(3);
    });
  });

  describe('getTasksAsync', () => {
    it('should return the tasks', () => {
      service.getTasksAsync().then(
        result => {
          expect(result.length).toEqual(3);
        }
      );
    });
  });

  describe('getTasksAsync', () => {
    it('should return the tasks', async () => {
      const result = await service.getTasksAsync();
      expect(result.length).toEqual(3);
    });
  });

  describe('getTasksRx', () => {
    it('should return the tasks', () => {
      service.getTasksRx().subscribe(tasks => {
        expect(tasks.length).toEqual(3);
      });
    });
  });
});
